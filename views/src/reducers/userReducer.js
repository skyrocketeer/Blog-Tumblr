const initialState = {
  user: {
    email: '',
    nickname: '',
    zodiac_sign: '',
    isVerified: false
  }
}

export default function (state = initialState, action){
  switch (action.type) {
    case ('FETCH_USER_INFO'): 
      return {
        ...state, 
        user: action.payload
      }
    default: 
      return state;
  }
}