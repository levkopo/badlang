import antlr4 from 'antlr4';
import BadlangLexer from './BadlangLexer.js';
import BadlangParser from './BadlangParser.js';

class Compiler {
    path = "<unknown>"

    constructor(path) {
        this.path = path
    }

    visitCall(ctx) {
        const command = ctx.NAME().toString()
        switch (command) {
            case 'run': return '(()=>{'+ctx.expression()
                .map(it => this.visitExpression(it)+';').join('')+'})()'

            case 'late': return '()=>{'+ctx.expression()
                .map(it => this.visitExpression(it)+';').join('')+'}'

            default:
                return command+"("+ctx.expression()
                    .map(it => this.visitExpression(it)).join(',')+")"
        }
    }

    visitValue(ctx) {
        if(ctx.INTEGER())
            return ctx.INTEGER().text
        else if(ctx.STRING())
            return ctx.STRING().text
    }

    visitExpression(ctx) {
        const primitive = ctx.primitive();
        if(primitive) return this.visitPrimitive(primitive)
        else {
            const left = ctx.expression(0)
            const right = ctx.expression(1)

            if(ctx.PLUS)
                return this.visitExpression(left)+"+"+this.visitExpression(right)
            else if(ctx.MINUS)
                return this.visitExpression(left)+"-"+this.visitExpression(right)
            else if(ctx.DIV)
                return this.visitExpression(left)+"/"+this.visitExpression(right)
            else if(ctx.MULTYPLY)
                return this.visitExpression(left)+"*"+this.visitExpression(right)
            else if(ctx.POW)
                return "Math.pow("+this.visitExpression(left)+","+this.visitExpression(right)+")"
            else throw new Error("Unknown operation")
        }
    }

    visitPrimitive(ctx) {
        const call = ctx.call();
        const value = ctx.value();
        if(call) return this.visitCall(call)
        else if(call) return this.visitValue(value)
    }
}

function runInput(visitor, input) {
    const parser = new BadlangParser(new antlr4.CommonTokenStream(
        new BadlangLexer(new antlr4.InputStream(input))
    ));
    parser.buildParseTrees = true;
    return visitor.visitExpression(parser.expression())
}

runInput(new Compiler("input"), "(run (console.log 1))")