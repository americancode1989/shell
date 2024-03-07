export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'Nombre completo*',
      requiredErrorMsg: 'Se requiere el nombre completo'
    },
    lastName: {
      name: 'lastName',
      label: 'Apellido*',
      requiredErrorMsg: 'Se requiere el apellido'
    },
    address1: {
      name: 'address2',
      label: 'Dirección*',
      requiredErrorMsg: 'La dirección es obligatoria'
    },

    city: {
      name: 'city',
      label: 'Ciudad*',
      requiredErrorMsg: 'Se requiere la ciudad'
    },
    state: {
      name: 'state',
      label: 'Estado*',
      requiredErrorMsg: 'La ciudad es obligatoria'
    },
    zipcode: {
      name: 'zipcode',
      label: 'código postal*',
      requiredErrorMsg: 'Se requiere el código postal',
      invalidErrorMsg: 'Formato de código postal inválido'
    },
    country: {
      name: 'country',
      label: 'País*',
      requiredErrorMsg: 'Se requiere país.'
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Utiliza esta dirección para los detalles del pago.'
    },
    invoiceId: {
      name: 'invoiceId',
      label: 'Utiliza este Id de factura'
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Nombre en la tarjeta*',
      requiredErrorMsg: 'Se requiere el nombre en la tarjeta'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Número de tarjeta*',
      requiredErrorMsg: 'Se requiere el número de la tarjeta',
      invalidErrorMsg: 'El número de tarjeta no es válido (por ejemplo, 4111111111111)'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Fecha de caducidad*',
      requiredErrorMsg: 'Se requiere fecha de caducidad',
      invalidErrorMsg: 'La fecha de vencimiento no es válida'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'Se requiere el CVV',
      invalidErrorMsg: 'El CVV no es válido (por ejemplo, 357)'
    }
  }
};
