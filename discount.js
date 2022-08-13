function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;

  if (ticketQuantity <= 100) {
    const totalPrice = ticketQuantity * first100Rate;
    return totalPrice;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicket = ticketQuantity - 100;
    const second100Price = restTicket * 90;
      const totalPrice = first100Price + second100Price;
      return totalPrice;
  }
  else if (ticketQuantity > 200) {
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicket = ticketQuantity - 200;
    const restTicketPrice = restTicket * restTicketRate;
    const totalPrice = first100Price + second100Price + restTicketPrice;
    return totalPrice;
    }
  else {
      return 'not a valid ticket quantity';
    }
}

const totalPrice = ticketPrice(201);
console.log(totalPrice);