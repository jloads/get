// get-target.js
if (typeof log !== 'function') {
    const log = console.log;
}

/**
 *
 * @param target
 * @returns {HTMLHeadElement}
 */
function getTarget(target) {
    log(this.constructor.name, ' target ', target);
    if (isEmpty(target)) {
        target = document.getElementsByTagName('head')[0];
        log(this.constructor.name, ' HEAD ', target, typeof target, target.innerHTML !== 'undefined',  target.innerHTML.length, Object.keys(target));
        if (isEmpty(target)) {
            target = document.body;
            log(this.constructor.name, ' BODY ', target);
        }
    }
    log(this.constructor.name, ' target ', target);
    console.log(' getTarget ', target);

    return target;
}
