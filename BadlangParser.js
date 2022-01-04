// Generated from Badlang.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BadlangListener from './BadlangListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\r:\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u001f\n",
    "\u0002\f\u0002\u000e\u0002\"\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\'\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u00061",
    "\n\u0006\f\u0006\u000e\u00064\u000b\u0006\u0005\u00066\n\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0002\u0003\u0002\u0007\u0002\u0004\u0006",
    "\b\n\u0002\u0003\u0004\u0002\u0003\u0003\u000b\u000b\u0002=\u0002\f",
    "\u0003\u0002\u0002\u0002\u0004&\u0003\u0002\u0002\u0002\u0006(\u0003",
    "\u0002\u0002\u0002\b*\u0003\u0002\u0002\u0002\n,\u0003\u0002\u0002\u0002",
    "\f\r\b\u0002\u0001\u0002\r\u000e\u0005\u0004\u0003\u0002\u000e \u0003",
    "\u0002\u0002\u0002\u000f\u0010\f\b\u0002\u0002\u0010\u0011\u0007\u0006",
    "\u0002\u0002\u0011\u001f\u0005\u0002\u0002\t\u0012\u0013\f\u0007\u0002",
    "\u0002\u0013\u0014\u0007\u0007\u0002\u0002\u0014\u001f\u0005\u0002\u0002",
    "\b\u0015\u0016\f\u0006\u0002\u0002\u0016\u0017\u0007\t\u0002\u0002\u0017",
    "\u001f\u0005\u0002\u0002\u0007\u0018\u0019\f\u0005\u0002\u0002\u0019",
    "\u001a\u0007\b\u0002\u0002\u001a\u001f\u0005\u0002\u0002\u0006\u001b",
    "\u001c\f\u0004\u0002\u0002\u001c\u001d\u0007\n\u0002\u0002\u001d\u001f",
    "\u0005\u0002\u0002\u0005\u001e\u000f\u0003\u0002\u0002\u0002\u001e\u0012",
    "\u0003\u0002\u0002\u0002\u001e\u0015\u0003\u0002\u0002\u0002\u001e\u0018",
    "\u0003\u0002\u0002\u0002\u001e\u001b\u0003\u0002\u0002\u0002\u001f\"",
    "\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002",
    "\u0002\u0002!\u0003\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002",
    "#\'\u0005\n\u0006\u0002$\'\u0005\u0006\u0004\u0002%\'\u0005\b\u0005",
    "\u0002&#\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002&%\u0003\u0002",
    "\u0002\u0002\'\u0005\u0003\u0002\u0002\u0002()\u0007\r\u0002\u0002)",
    "\u0007\u0003\u0002\u0002\u0002*+\t\u0002\u0002\u0002+\t\u0003\u0002",
    "\u0002\u0002,-\u0007\u0004\u0002\u0002-5\u0007\r\u0002\u0002.2\u0005",
    "\u0002\u0002\u0002/1\u0005\u0002\u0002\u00020/\u0003\u0002\u0002\u0002",
    "14\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002",
    "\u000236\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u00025.\u0003\u0002",
    "\u0002\u000256\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u000278\u0007",
    "\u0005\u0002\u00028\u000b\u0003\u0002\u0002\u0002\u0007\u001e &25"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class BadlangParser extends antlr4.Parser {

    static grammarFileName = "Badlang.g4";
    static literalNames = [ null, null, "'('", "')'", "'+'", "'-'", "'*'", 
                            "'/'", "'**'" ];
    static symbolicNames = [ null, "STRING", "OPEN", "CLOSE", "PLUS", "MINUS", 
                             "MULTYPLY", "DIV", "POW", "INTEGER", "WS", 
                             "NAME" ];
    static ruleNames = [ "expression", "primitive", "link", "value", "call" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BadlangParser.ruleNames;
        this.literalNames = BadlangParser.literalNames;
        this.symbolicNames = BadlangParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };



	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, BadlangParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this.primitive();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 30;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 28;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, BadlangParser.RULE_expression);
	                    this.state = 13;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 14;
	                    this.match(BadlangParser.PLUS);
	                    this.state = 15;
	                    this.expression(7);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, BadlangParser.RULE_expression);
	                    this.state = 16;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 17;
	                    this.match(BadlangParser.MINUS);
	                    this.state = 18;
	                    this.expression(6);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, BadlangParser.RULE_expression);
	                    this.state = 19;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 20;
	                    this.match(BadlangParser.DIV);
	                    this.state = 21;
	                    this.expression(5);
	                    break;

	                case 4:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, BadlangParser.RULE_expression);
	                    this.state = 22;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 23;
	                    this.match(BadlangParser.MULTYPLY);
	                    this.state = 24;
	                    this.expression(4);
	                    break;

	                case 5:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, BadlangParser.RULE_expression);
	                    this.state = 25;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 26;
	                    this.match(BadlangParser.POW);
	                    this.state = 27;
	                    this.expression(3);
	                    break;

	                } 
	            }
	            this.state = 32;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	primitive() {
	    let localctx = new PrimitiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BadlangParser.RULE_primitive);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case BadlangParser.OPEN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.call();
	            break;
	        case BadlangParser.NAME:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.link();
	            break;
	        case BadlangParser.STRING:
	        case BadlangParser.INTEGER:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.value();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	link() {
	    let localctx = new LinkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BadlangParser.RULE_link);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(BadlangParser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BadlangParser.RULE_value);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        _la = this._input.LA(1);
	        if(!(_la===BadlangParser.STRING || _la===BadlangParser.INTEGER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BadlangParser.RULE_call);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(BadlangParser.OPEN);
	        this.state = 43;
	        this.match(BadlangParser.NAME);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BadlangParser.STRING) | (1 << BadlangParser.OPEN) | (1 << BadlangParser.INTEGER) | (1 << BadlangParser.NAME))) !== 0)) {
	            this.state = 44;
	            this.expression(0);
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BadlangParser.STRING) | (1 << BadlangParser.OPEN) | (1 << BadlangParser.INTEGER) | (1 << BadlangParser.NAME))) !== 0)) {
	                this.state = 45;
	                this.expression(0);
	                this.state = 50;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 53;
	        this.match(BadlangParser.CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

BadlangParser.EOF = antlr4.Token.EOF;
BadlangParser.STRING = 1;
BadlangParser.OPEN = 2;
BadlangParser.CLOSE = 3;
BadlangParser.PLUS = 4;
BadlangParser.MINUS = 5;
BadlangParser.MULTYPLY = 6;
BadlangParser.DIV = 7;
BadlangParser.POW = 8;
BadlangParser.INTEGER = 9;
BadlangParser.WS = 10;
BadlangParser.NAME = 11;

BadlangParser.RULE_expression = 0;
BadlangParser.RULE_primitive = 1;
BadlangParser.RULE_link = 2;
BadlangParser.RULE_value = 3;
BadlangParser.RULE_call = 4;

class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BadlangParser.RULE_expression;
    }

	primitive() {
	    return this.getTypedRuleContext(PrimitiveContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(BadlangParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(BadlangParser.MINUS, 0);
	};

	DIV() {
	    return this.getToken(BadlangParser.DIV, 0);
	};

	MULTYPLY() {
	    return this.getToken(BadlangParser.MULTYPLY, 0);
	};

	POW() {
	    return this.getToken(BadlangParser.POW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BadlangListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BadlangListener ) {
	        listener.exitExpression(this);
		}
	}


}



class PrimitiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BadlangParser.RULE_primitive;
    }

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	link() {
	    return this.getTypedRuleContext(LinkContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BadlangListener ) {
	        listener.enterPrimitive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BadlangListener ) {
	        listener.exitPrimitive(this);
		}
	}


}



class LinkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BadlangParser.RULE_link;
    }

	NAME() {
	    return this.getToken(BadlangParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BadlangListener ) {
	        listener.enterLink(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BadlangListener ) {
	        listener.exitLink(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BadlangParser.RULE_value;
    }

	INTEGER() {
	    return this.getToken(BadlangParser.INTEGER, 0);
	};

	STRING() {
	    return this.getToken(BadlangParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BadlangListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BadlangListener ) {
	        listener.exitValue(this);
		}
	}


}



class CallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BadlangParser.RULE_call;
    }

	OPEN() {
	    return this.getToken(BadlangParser.OPEN, 0);
	};

	NAME() {
	    return this.getToken(BadlangParser.NAME, 0);
	};

	CLOSE() {
	    return this.getToken(BadlangParser.CLOSE, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BadlangListener ) {
	        listener.enterCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BadlangListener ) {
	        listener.exitCall(this);
		}
	}


}




BadlangParser.ExpressionContext = ExpressionContext; 
BadlangParser.PrimitiveContext = PrimitiveContext; 
BadlangParser.LinkContext = LinkContext; 
BadlangParser.ValueContext = ValueContext; 
BadlangParser.CallContext = CallContext; 
