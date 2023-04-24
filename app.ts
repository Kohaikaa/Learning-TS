enum PaymentStatus {
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface IPayment {
    sum: number,
    from: number | string,
    to: number | string
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number | string
}

interface IDataFailed {
    errorMessage: string,
    errorCode: number | string
}

interface IPaymentResponseSuccess {
    status: PaymentStatus.SUCCESS,
    data: IDataSuccess
}

interface IPaymentResponseFailed {
    status: PaymentStatus.FAILED,
    data: IDataFailed
}

const responses: [IPaymentResponseSuccess, IPaymentResponseFailed] = [
    {
        status: PaymentStatus.SUCCESS,
        data: {
            databaseId: 567,
            sum: 10000,
            from: 2,
            to: 4
        }
    },
    {
        status: PaymentStatus.FAILED,
        data: {
            errorMessage: "Недостаточно средств",
            errorCode: 4
        }
    }
];

responses.forEach(res => console.log(res));