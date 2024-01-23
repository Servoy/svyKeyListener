/**
 * Registers the listener on the components which have the "keylistener" attribute with the given callbackKey value, to call the given callback when a key is pressed.
 *
 * @param callbackKey {string} The key for which the listener will be added. This key has to match value of "keylistener" attribute in component.
 * @param callback {Function} The callback function to be called when a key is pressed.
 * @param [clearPreviousCallback] {boolean} If true a removeKeyListener will be called for this key before adding the new one. Default value is false.
 * @param [delay] {int} Number of milliseconds to wait before callback method is called. Default value is 1000.
 * @param [regexPattern] {string} Javascript regular expression string to modify current value of the component.
 * @param [regexReplacement] {string} The value that is used to replace the regular expression with in the current value of the component.
 *
 * @example plugins.keyListener.addKeyListener('test', onKey)
 */
function addKeyListener(callbackKey, callback, clearPreviousCallback, delay, regexPattern, regexReplacement) {

}

/**
 * Removes the listener associated to the given callback key. Returns true if the listener was removed.
 * 
 * @param callbackKey {string} The key listener to remove.
 * @return {boolean} succes of removal
 * 
 * @example plugins.keyListener.removeKeyListener('test')
 */
function removeKeyListener(callbackKey) {
         
}