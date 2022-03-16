import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: '',
    thaliitems: [
        {
          "id": 1,
          "name": "Panner Tikka Masala",
          "description": "Traditional Indian Paneer tikka masala features pieces of Paneer , served in a creamy tomato curry sauce.",
          "imageurl": "https://i1.wp.com/littleindia.ca/wp-content/uploads/2013/12/Paneer-Tikka-Masala-Indian-Food-Menu-The-Best-Indian-restaurant-toronto-near-me.png?fit=982%2C606&ssl=1",
          "select": "false",
          "price":"140",
          "quantity": "1"
        },
        {
          "id": 2,
          "name": "Chapati",
          "description": "A round flat unleavened bread of India that is usually made of whole wheat flour and cooked on a griddle.",
          "imageurl": "https://pluspng.com/img-png/png-roti-ingredient-list-800.png",
          "select": "false",
          "price":"15",
          "quantity": "1"
        },
        {
          "id": 3,
          "name": "Daal",
          "description": "An Indian dish made of simmered and usually pureed and spiced legumes.",
          "imageurl": "https://spicemantraonline.com/images/indian/DalMakhni1.png",
          "select": "false",
          "price":"80",
          "quantity": "1"
        },
        {
          "id": 4,
          "name": "Rice",
          "description": "Edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced . Rich in nutrients and vitamins and minerals, it an excellent source of complex carbohydrates.",
          "imageurl": "https://purepng.com/public/uploads/large/purepng.com-ricericeseedgrainfood-141152865495085vja.png",
          "select": "false",
          "price":"70",
          "quantity": "1"
        },
        {
            "id": 5,
            "name": "Salad",
            "description": "A mixture of raw usually green leafy vegetables (as lettuce) combined with other vegetables (as tomato and cucumber) and served with a dressing.",
            "imageurl": "https://images.getbento.com/accounts/0a6ca328d2a4178127fd36f1a142b8e4/media/images/CrispyChickenSalad.png?w=600&fit=max&auto=compress,format&h=600",
            "select": "false",
            "price": "15",
            "quantity": "1"
          },
          {
          "id": 6,
          "name": "Gulab Jamun",
          "description": "An Indian dessert of fried dough balls that are soaked in a sweet, sticky sugar syrup. As per tradition, the syrup has a delicate rose flavour.",
          "imageurl": "https://toppng.com/public/uploads/thumbnail/ulabjamun-gulab-jamu-11562941843f30k6hkgxq.png",
          "select": "false",
          "price": "50",
          "quantity": "1"
        },
        {
          "id": 7,
          "name": "Curd",
          "description": "The thickened or solid part of milk that separates from the whey after milk sours and is used to make cheese",
          "imageurl": "https://www.freepngimg.com/download/spoon/29644-1-spoon-with-curd.png",
          "select": "false",
          "price":"25",
          "quantity": "1"
        },
        {
          "id": 8,
          "name": "Pickle",
          "description": "Vegetables or fruit, sometimes cut into pieces, which have been kept in vinegar or salt water for a long time so that they have a strong, sharp taste.",
          "imageurl": "https://th.bing.com/th/id/R.e01eb9141d6b5adb90122b5c98e55253?rik=cS9fJiviVVVs%2fA&riu=http%3a%2f%2fwww.mannmakhifarm.apnikheti.co.in%2fwp-content%2fuploads%2fsites%2f38%2f2016%2f12%2fmango-pickels.png&ehk=YJYpwWYxiMQE%2fFdV9yY1dIDhrqQ3XpyJDdwhy2UPrNw%3d&risl=&pid=ImgRaw&r=0",
          "select": "false",
          "price":"15",
          "quantity": "1"
        },
      ],
    thali:[
      
    ]
  }

  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
     
    
      addtocart: (state, action) => {
     
        state.thali.push(action.payload);
      },
      removefromcart:(state,action)=>{
         state.thali.splice(action.payload,1)
      },
    },
  })
  
  export const { addtocart ,removefromcart } = counterSlice.actions;
  
  export default counterSlice.reducer