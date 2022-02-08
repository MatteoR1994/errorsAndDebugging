// Retry

class MultiplicatorUnitFailure extends Error {
    constructor(message) {
        super(message);
    }
 }

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    while (true) {
        try {
            return primitiveMultiply(a, b);
        } catch (error) {
            if (error instanceof MultiplicatorUnitFailure) {
                console.log(error.message);
            }
        }
    }
}

console.log(reliableMultiply(8, 8));

/*******************************************************************************************/

// The locked box

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) {
            throw new Error("Locked!");
        }
        return this._content;
    }
};

function withBoxUnlocked(body) {
    const locked = box.locked;
    if (!locked) {
        return body();
    }

    box.unlock();
    try {
        return body();
    } finally {
        box.lock();
    }
}

withBoxUnlocked(function () {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}
console.log(box.locked);
console.log(box._content);