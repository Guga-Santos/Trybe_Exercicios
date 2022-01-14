const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const client = order.name;
  const telefone = order.phoneNumber;
  const rua = order.address.street;
  const numero = order.address.number;
  const apartamento = order.address.apartment;

    console.log(`Olá ${deliveryPerson}, entrega para: ${client}, Telefone: ${telefone}, Endereço: ${rua}, N°: ${numero}, Apt°: ${apartamento}.`)

  }

  customerInfo(order);
  
  const orderModifier = (order) => {
      const novoCliente = order.name = "Luiz Silva";
      const pizzas = Object.keys(order.order.pizza);
      const bebida = order.order.drinks.coke.type;
      const conta = order.payment.total = '50';

      console.log(`Olá, ${novoCliente}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é R$ ${conta},00.`)

    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);
 