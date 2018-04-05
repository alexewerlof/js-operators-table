const vals = [
    true,
    false,
    1,
    0,
    -1,
    'true',
    'false',
    '1',
    '0',
    '-1',
    '',
    null,
    undefined,
    Infinity,
    -Infinity,
    () => new Array,
    () => new Object,
    NaN,
]

export function stringify(val) {
    switch ( typeof val ) {
    case 'string':
        return `"${val}"`;
    case 'object':
        return JSON.stringify(val)
    default:
        return String(val)
    }
}

export function getVals() {
    return vals
        .map(v => typeof v === 'function' ? v() : v)
        .map(v => {
            return {
                text: stringify(v),
                value: v
            }
        });
}

export const binOps = [
    {
        text: '==',
        action(a, b) {
            return a == b
        }
    },
    {
        text: '!=',
        action(a, b) {
            return a != b
        }
    },
    {
        text: '===',
        action(a, b) {
            return a === b
        }
    },
    {
        text: '!==',
        action(a, b) {
            return a !== b
        }
    },
    {
        text: '==',
        action(a, b) {
            return a == b
        }
    },
    {
        text: '&&',
        action(a, b) {
            return a && b
        }
    },
    {
        text: '||',
        action(a, b) {
            return a || b
        }
    },
    {
        text: '^',
        action(a, b) {
            return a ^ b
        }
    },
    {
        text: '*',
        action(a, b) {
            return a * b
        }
    },
    {
        text: '+',
        action(a, b) {
            return a + b
        }
    },
    {
        text: '-',
        action(a, b) {
            return a - b
        }
    },
    {
        text: '**',
        action(a, b) {
            return a ** b
        }
    },
    {
        text: '|',
        action(a, b) {
            return a | b
        }
    },
    {
        text: '&',
        action(a, b) {
            return a & b
        }
    },
    {
        text: '^',
        action(a, b) {
            return a ^ b
        }
    },
    {
        text: '>>',
        action(a, b) {
            return a >> b
        }
    },
    {
        text: '<<',
        action(a, b) {
            return a << b
        }
    },
    {
        text: '<',
        action(a, b) {
            return a < b
        }
    },
    {
        text: '>',
        action(a, b) {
            return a > b
        }
    },
    {
        text: '<=',
        action(a, b) {
            return a <= b
        }
    },
    {
        text: '>=',
        action(a, b) {
            return a >= b
        }
    },
]