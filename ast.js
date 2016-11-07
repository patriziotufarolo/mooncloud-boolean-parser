class Token {
    constructor(value) {
        this.value = value;
    }
}
class Var {
    constructor(token) {
        this.token = token;
    }
}
class BinaryOperator {
    constructor(token, left, right) {
        this.token = token;
        this.left = left;
        this.right = right;
    }
}
class UnaryOperator {
    constructor(token, operand) {
        this.token = token;
        this.operand = operand;
    }
}

class And extends BinaryOperator { }
class Or extends BinaryOperator { }
class Implies extends BinaryOperator { }
class Iff extends BinaryOperator { }
class Not extends UnaryOperator { }

module.exports = {
    Token, Var, And, Or, Implies, Iff, Not
}
