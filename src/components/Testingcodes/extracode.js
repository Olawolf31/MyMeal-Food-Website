  /* switch (action.type) {
    case "ADD":
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
 */
      //check if an item is already in the cart
      /* const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex]; */

      //update item and items variables

  /*     let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return defaulCartState;
  } */



  ///////////////

  // check if item being added is already in the cart, if so,  just update amount
/*   const indexOfItemIdExists = state.items.findIndex((stateItem) => {
    return stateItem.id === action.item.id;
  });
  const existingStateItem = state.items[indexOfItemIdExists]; // starts as undefined

  let updatedItems, updatedItem;

  if (indexOfItemIdExists !== -1) {
    updatedItem = {
      ...existingStateItem,
      amount: existingStateItem.amount + action.item.amount,
    };
    // using a slice to insert updated item already in cart
    updatedItems = [
      ...state.items.slice(0, indexOfItemIdExists),
      updatedItem,
      ...state.items.slice(indexOfItemIdExists + 1),
    ];
  } else {
    updatedItems = state.items.concat(action.item); // if not yet in cart, just concat it into state.items array
  }

  const updatedTotalAmount =
    state.totalAmount + action.item.price * action.item.amount;

  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  }; */


  //output items individually

       /*  const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return defaulCartState; */

      //short and concise

        /* if (action.type === "ADD") {
    let updatedItems;
    const index = state.items.findIndex((el) => el.id === action.item.id);
    if (index === -1) {
      updatedItems = [...state.items, action.item];
    } else {
      updatedItems = [...state.items];
      updatedItems[index].amount += action.item.amount;
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  } */

      //payload

/*       switch (action.type) {
        case "ADD":
          let updatedItems;
          if (state.items.find((item) => item.id === action.payload.id)) {
            updatedItems = state.items.map((item) =>
              item.id === action.payload.id
                ? { ...item, amount: item.amount + action.payload.amount }
                : item
            );
          } else {
            updatedItems = [...state.items, action.payload];
          }
          return {
            items: updatedItems,
            totalAmount:
              state.totalAmount + action.payload.price * action.payload.amount,
          };
    
        default:
          return defaulCartState; */