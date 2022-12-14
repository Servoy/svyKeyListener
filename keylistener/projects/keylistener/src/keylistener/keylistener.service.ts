import { Injectable } from '@angular/core';

import { ComponentContributor, IComponentContributorListener, ServoyBaseComponent, ServoyPublicService } from '@servoy/public';

@Injectable()
export class KeyListener implements IComponentContributorListener {
    private _callbacks: Callback[] = [];

    constructor(private componentContributor: ComponentContributor, private servoyService: ServoyPublicService) {
        componentContributor.addComponentListener(this);
    }

    get callbacks(): Callback[] {
        return this._callbacks;
    }

    set callbacks(callbacks: Callback[]) {
        this._callbacks = callbacks;
    }

    public componentCreated(component: ServoyBaseComponent<any>) {
        const element = component.getNativeChild();
        const renderer = component.getRenderer();
        if (element) {
            const attribute = element.getAttribute('keylistener');
            if (attribute) {
                renderer.listen(element, 'keyup', (event) => {
					const eventObject = event.detail ? event.detail : event;
                    const callback = this.getCallback(attribute);
                    if (callback) {
						//if there is a restriction on the pattern, remove last typed character in the event if not matching.
                        if (callback.regexPattern) {
                            const regexPattern = new RegExp(callback.regexPattern, 'g');
                            var s = eventObject.key;
                            if (!s) return;
                            var tmp = eventObject.target.value
                            eventObject.target.value = eventObject.target.value.replace(regexPattern, callback.regexReplacement);
                            //if replace was done, don't fire event.
                            if (tmp.length != eventObject.target.value.length) return;
                        }
                        const ev = this.servoyService.createJSEvent(eventObject, 'keyup');
                        let capsLockEnabled = false;
                        if (eventObject instanceof KeyboardEvent) {
                            capsLockEnabled = eventObject.getModifierState('CapsLock');
                        } else if (eventObject.originalEvent instanceof KeyboardEvent) {
                            capsLockEnabled = eventObject.originalEvent.getModifierState('CapsLock');
                        }
                        if (callback.delay) {
                            setTimeout(() => {
                                this.servoyService.executeInlineScript(callback.callback.formname, callback.callback.script,
                                    [eventObject.target.value, ev, eventObject.keyCode, eventObject.altKey, eventObject.ctrlKey, eventObject.shiftKey, capsLockEnabled]);
                            }, callback.delay);
                        }
                        else {
                            this.servoyService.executeInlineScript(callback.callback.formname, callback.callback.script,
                                [eventObject.target.value, ev, eventObject.keyCode, eventObject.altKey, eventObject.ctrlKey, eventObject.shiftKey, capsLockEnabled]);
                        }
					}
                });
            }
        }
    }

    public addKeyListener(callbackKey: string, callback: Function, clearCB?: boolean, delay?: number, regexPattern?: string, regexReplacement?: string) {
        if (clearCB) this._callbacks = [];
        this._callbacks.push({ callbackKey, callback, delay, regexPattern, regexReplacement });
        this.servoyService.sendServiceChanges('keyListener', 'callbacks', this._callbacks);
    }

    public removeKeyListener(callbackKey: string): boolean {
        const len = this._callbacks.length;
        this._callbacks = this._callbacks.filter(c => c.callbackKey != callbackKey);
        if (len > this._callbacks.length) {
            this.servoyService.sendServiceChanges('keyListener', 'callbacks', this._callbacks);
            return true;
        }
        return false;
    }

    private getCallback(callbackKey: String): Callback {
        const cb = this._callbacks.find(c => c.callbackKey === callbackKey);
        return cb;
    }
}

class Callback {
    public callbackKey: string;
    public callback: Function;
    public delay: number;
    public regexPattern: string;
    public regexReplacement: string;
}

class Function {
    public formname: string;
    public script: string;
}
