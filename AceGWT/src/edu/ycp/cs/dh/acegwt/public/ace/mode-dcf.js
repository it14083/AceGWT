define("ace/mode/dcf_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var DCFHighlightRules = function() {
var keywords = "ACCEPT|MERGE";

    var builtinConstants = (
        "true|false|null"
    );

    var builtinFunctions = (
        "count|min|max|avg|sum|rank|now|coalesce|main"
    );

    var keywordMapper = this.createKeywordMapper({
        "support.function": builtinFunctions,
        "keyword": keywords,
        "constant.language": builtinConstants
    }, "identifier", true);

    this.$rules = {
    		"start": [
                    {
                        token: "comment",
                        regex: "\\.\\*.*$"
                    },
                    {
                        token: "string",
                        regex: '".*?"'
                    },
                    {
                        token: "string",
                        regex: '\'.*?\''
                    },
                    {
                        token: "constant.numeric",
                        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(mm|cm|in)?\\b"
                    },
                    {
                        token: keywordMapper,
                        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                    },
                    {
                    	token: "keyword",
                    	regex: "^\\.[a-z]*\\s",
                    	next: "makro"
                    },
                    {
                    	token: "keyword",
                    	regex: "^\\.[a-z]*$",
                    },
                    {
                        token: "keyword.operator",
                        regex: "\\+|\\-|\\/|\\*|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
                    },
                    {
                        token: "support.function",
                        regex: "^:[A-Z]*\\b",
                        next: "feld"
                    },
                    {
                        token: "paren.lparen",
                        regex: "[\\(]"
                    },
                    {
                        token: "paren.rparen",
                        regex: "[\\)]"
                    },
                    {
                        token: "text",
                        regex: "\\s+"
                    }
                ],
                "feld": [
                         {
                      	   token: "support.function",
                      	   regex: "\\.",
                      	   next: "start"
                         },
                         {
                      	   token: "string",
                      	   regex: "\'.*?\'"
                         },
                         {
                             token: "keyword.operator",
                             regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
                         },
                         {
                      	   token: "variable.language",
                      	   regex: "[^=]*"
                         }
                      ],
                      "makro": [
                          {
                          	token: "entity.name",
                          	regex: "\.*?$",
                          	next: "start"
                          }
                      ]
    };
};

oop.inherits(DCFHighlightRules, TextHighlightRules);

exports.DCFHighlightRules = DCFHighlightRules;
});

define("ace/mode/dcf",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/dcf_highlight_rules","ace/range"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var DCFHighlightRules = require("./dcf_highlight_rules").DCFHighlightRules;
var Range = require("../range").Range;

var Mode = function() {
    this.HighlightRules = DCFHighlightRules;
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "*";

    this.$id = "ace/mode/dcf";
}).call(Mode.prototype);

exports.Mode = Mode;

});
