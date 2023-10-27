import React, { useReducer } from 'react'

const initialState = {
    data : [],
    loading : false,
    error : null
};
function reducer(state, action) {
    console.log(state, action);

    switch(action.type) {
        case 'FETCH_DATA_START':
            return {...state, loading: true};
        case 'FETCH_DATA_SUCCESS':
            return {...state, loading: false, error: null, data: action.payload};
        case 'FETCH_DATA_ERROR':
            return {...state, loading: false, error: action.payload};
        case 'DELETE_DATA':
            return {...state, data: state.data.filter((item) => item.id !== action.payload)};
        case 'ADD_DATA':
            return {...state, data: [...state.data, action.payload]};
    }
};

const UseReducerEx = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async() => {
    dispatch({type: "FETCH_DATA_START"});
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        dispatch({type: 'FETCH_DATA_SUCCESS', payload: data});
        console.log(data);
    }catch(error) {
        dispatch({type: "FETCH_DATA_ERROR", payload: error.message});
    }
  };
  const addData = (newData) => {
    dispatch({type: 'ADD_DATA', payload: newData});
  };
  const deleteData = (id) => {
    dispatch({type: "DELETE_DATA", payload:id});
  };

  return (
    <div className='container my-3'>
      <h1>Post Titles</h1><hr/>
      <button className="btn btn-primary mb-3" onClick={fetchData}>Fetch Data</button>
      {state.loading && <p>Lodding...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <ul>
        {state.data.map((item) => (
            <li key={item.id}>
              {item.title}{' '}
              <button className='btn btn-danger btn-sm mb-1' onClick={() => deleteData(item.id)}>Delete</button>
            </li>
        ))}
      </ul>
      <form className="row g-3" onSubmit={(e) => {
        e.preventDefault();
        addData({id: Date.now(), title: e.target.title.value})
      }}>
        <div className="col-auto">
          <input type="text" name='title' className="form-control" placeholder="Enter New Post"/>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-info mb-3">ADD POST</button>
        </div>
      </form>
    </div>
  )
}

export default UseReducerEx
