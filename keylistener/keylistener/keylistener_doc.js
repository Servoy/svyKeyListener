var callbacks;


/**
 * Registers the listener on the components which have the "keylistener" attribute with the given callbackKey value, to call the given callback when a key is pressed.
 *
 * @param {String} callbackKey The key for which the listener will be added. This key has to match value of "keylistener" attribute in component.
 * @param {Function} callback The callback function to be called when a key is pressed.
 * @param {Boolean} [clearCB] If true a removeKeyListener will be called for this key before adding the new one. Default value is false.
 * @param {Number} [delay] Number of milliseconds to wait before callback method is called. Default value is 1000.
 * @param {String} [regexPattern] Javascript regular expression string to modify current value of the component.
 * @param {String} [regexReplacement] The value that is used to replace the regular expression with in the current value of the component.
 *
 * @example plugins.keyListener.addKeyListener('test', onKey)
 */
function addKeyListener(callbackKey, callback, clearPreviousCallback, delay, regexPattern, regexReplacement) {

}

/**
 * Removes the listener associated to the given callback key. Returns true if the listener was removed.
 * 
 * @param {String} callbackKey The key listener to remove.
 * @return {Boolean} succes of removal
 * 
 * @example plugins.keyListener.removeKeyListener('test')
 */
function removeKeyListener(callbackKey) {
         
}