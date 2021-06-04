{
	"name": "keyListener",
	"displayName": "keyListener",
	"version": 1,
 	"definition": "svykeylistener/keylistener/keylistener.js",
 	"ng2Config": {
       "packageName": "@servoy/keylistener",
       "serviceName": "KeyListener",
       "entryPoint": "dist/servoy/keylistener"
    },
	"libraries": [],
	"model":
	{		
    	"callbacks" : {"type":"callback[]", "pushToServer": "deep", "elementConfig": {"pushToServer": "deep"} ,"initialValue": [], "tags": { "scope" :"private" }}
 	},
 	"api":
 	{
	   	"addKeyListener": 
	   	{
            "async": true,
	    	"parameters":
	    	[
		    	{
					"name":"callbackKey",
					"type":"string"
				},
				{
					"name":"callback",
					"type":"function"
		        },
		        {
					"name":"clearCB",
					"type":"boolean",
					"optional": true
		        },
		        {
					"name":"delay",
					"type":"int",
					"optional": true
				},{
					"name":"regexPattern",
					"type":"string",
					"optional": true
				},{
					"name":"regexReplacement",
					"type":"string",
					"optional": true
				}
			]
		},
		"removeKeyListener":
		{
			"returns":"boolean",
			"parameters":
		    	[
			    	{
						"name":"callbackKey",
						"type":"string"
					}
				]
		}
 	},
 	"types": {
	  "callback": {
	  		"callbackKey": "string",
	  		"callback": "function",
	  		"isRunning": "int",
	  		"delay": "int",
	  		"regexPattern": "string",
	  		"regexReplacement":"string"
	  }
	}
}