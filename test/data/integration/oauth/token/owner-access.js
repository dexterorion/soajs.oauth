'use strict';

let token = {
    _id: "5cdc190fd52c82e0ddb1dcd5",
    type: "accessToken",
    token: "44a5399dcce96325fadfab908e614bf00e6fe967",
    clientId: "5c0e74ba9acc3c5a84a51259",
    user: {
        _id: "5c8d0c505653de3985aa0ffd",
        username: "owner",
        firstName: "owner3",
        lastName: "owner",
        email: "me@localhost.com",
        status: "active",
        config: {
            allowedTenants: [
                {
                    tenant: {
                        id: "THYME_tID",
                        code: "THYME_CODE",
                        pin: {
                            code: "5678",
                            allowed: true
                        }
                    },
                    groups: [
                        "waiter"
                    ]
                },
                {
                    tenant: {
                        id: "ELVIRA_tID",
                        code: "ELVIRA_CODE"
                    },
                    groups: [
                        "manager"
                    ]
                },
	            {
		            tenant: {
			            id: "5da6d6280067e20d5fe67667",
			            code: "COD1"
		            },
		            groups: [
		            	'group1'
		            ]
	            }
            ]
        },
        "ts": new Date().getTime(),
        tenant: {
            id: "5c0e74ba9acc3c5a84a51259",
            code: "DBTN",
            pin: {
                code: "1235",
                allowed: true
            }
        },
        groups: ["owner"],
        lastLogin: new Date().getTime(),
        groupsConfig: {
            allowedPackages: {
                DSBRD: [
                    "DSBRD_OWNER"
                ]
            }
        },
        loginMode: "urac",
        id: "5c8d0c505653de3985aa0ffd"
    },
    env: "dashboard",
    expires: new Date((new Date().getFullYear()) + 2, 0, 1)
};

module.exports = token;