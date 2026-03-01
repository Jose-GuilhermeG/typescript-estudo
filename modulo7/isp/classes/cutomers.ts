import { IndividualCustomerProtocol , EnterpriseCustomerProtocol } from "../interfaces/Customer";

export class IndividualCustomer implements IndividualCustomerProtocol{
    constructor(
        public firstName : string,
        public lastName : string,
        public cpf : string,
    ){}
};
export class EnterpriseCustomer implements EnterpriseCustomerProtocol{
    constructor(
        public cnpj : string,
    ){}
};