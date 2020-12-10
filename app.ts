enum Operator {
    'PLUS',
    'MINUS'
}

class Calculator {
    private values: number[]
    private operators: Operator[]
    
    constructor() {
        this.values = []
        this.operators = []
      
    }
    one() {
        this.values.push(1)
        return this
    }
    two() {
        this.values.push(2)
        return this
    }
    three() {
        this.values.push(3)
        return this
    }
    plus() {
        this.operators.push(Operator.PLUS)
        return this
    }
    minus() {
        this.operators.push(Operator.MINUS)
         return this
     }
    equals() {
        return this.values.reduce((prev: number, cur: number, index) => {
            switch (this.operators[index - 1]) {
                case Operator.PLUS: return prev + cur
                case Operator.MINUS: return prev - cur
            }   
        })
    }
}

const calc = () => new Calculator()
console.log(calc().one().plus().one().equals()) // 2
console.log(calc().one().plus().two().minus().three().equals()) // 0
