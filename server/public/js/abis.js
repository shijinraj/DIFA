var PROXY_CONTROLLER_ABI = [{"constant":true,"inputs":[{"name":"_organizationsAddress","type":"address"},{"name":"_addr","type":"address"}],"name":"getNonceInOrganizations","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"provider","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_personalInformationsAddress","type":"address"},{"name":"_addr","type":"address"}],"name":"getNonceInPersonalInformations","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_personalInformationsAddress","type":"address"},{"name":"_user","type":"address"},{"name":"_index","type":"bytes32"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"removePersonalInformation","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionContract","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_personalInformationsAddress","type":"address"},{"name":"_user","type":"address"},{"name":"_index","type":"bytes32"},{"name":"_dataHash","type":"bytes32"},{"name":"_expires","type":"uint256"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"createPersonalInformation","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_organizationsAddress","type":"address"},{"name":"_organizationKey","type":"bytes32"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"createOrganization","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_personalInformationsAddress","type":"address"},{"name":"_user","type":"address"},{"name":"_index","type":"bytes32"},{"name":"_dataHash","type":"bytes32"},{"name":"_expires","type":"uint256"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"updatePersonalInformation","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionLogic","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"logic_v1","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_organizationsAddress","type":"address"},{"name":"_addr","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"addOrganizationMember","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_organizationsAddress","type":"address"},{"name":"_addr","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"removeOrganizationMember","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_organizationsAddress","type":"address"},{"name":"_addr","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"removeOrganizationAdmin","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_organizationsAddress","type":"address"},{"name":"_addr","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"addOrganizationAdmin","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionContractOrLogic","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_organizationsAddress","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"changeOrganizationActivation","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"cns","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_personalInformationsAddress","type":"address"},{"name":"_addr","type":"address"},{"name":"_certificationAuthorityKey","type":"bytes32"},{"name":"_index","type":"bytes32"}],"name":"getPersonalInformation","outputs":[{"name":"","type":"bool"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getContractName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getCns","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_cns","type":"address"},{"name":"_logic_v1","type":"address"}],"payable":false,"type":"constructor"}];