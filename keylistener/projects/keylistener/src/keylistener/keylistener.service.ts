import { Injectable } from '@angular/core';

import { ComponentContributor, IComponentContributorListener, ServoyBaseComponent, ServoyPublicService } from '@servoy/public';

type CallableFunction = (...args: unknown[]) => void;

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
        const child = component.getNativeChild();
        const element = component.getNativeElement();
        const renderer = component.getRenderer();
        if (element) {
            let attribute = element.getAttribute('keylistener');
            if (!attribute) child.getAttribute('keylistener');
            if (attribute) {
                renderer.listen(child, 'keyup', (event) => {
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
                        let value;
                        if (child.classList.contains('svy-extra-htmlarea')) {
							value = event.target.querySelector('iframe').contentWindow.document.querySelector('body').getInnerHTML();
						} else {
							value = eventObject.target.value;
						}
                        if (callback.delay) {
                            setTimeout(() => {
                                callback.callback(value, ev, eventObject.keyCode, eventObject.altKey, eventObject.ctrlKey, eventObject.shiftKey, capsLockEnabled);
                            }, callback.delay);
                        }
                        else {
                            callback.callback(value, ev, eventObject.keyCode, eventObject.altKey, eventObject.ctrlKey, eventObject.shiftKey, capsLockEnabled);
                        }
					}
                });
            }
        }
    }

    public addKeyListener(callbackKey: string, callback: (...args: unknown[]) => void, clearCB?: boolean, delay?: number, regexPattern?: string, regexReplacement?: string) {
        if (clearCB) {
            this._callbacks = this._callbacks.filter(c => c.callbackKey !== callbackKey);
        }
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
    public callback: CallableFunction;
    public delay: number;
    public regexPattern: string;
    public regexReplacement: string;
}
