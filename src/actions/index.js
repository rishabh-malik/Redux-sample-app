const URL_Root='http://localhost:3004'
export function getCars(keywords){

    const request=fetch(`${URL_Root}/carsIndex?q=${keywords}`,
    {method:'GET'})
    .then(response=>response.json())

    //action->fetch->json server->search->return data->send to reducer

    return{
        type:'SEARCH_CARS',
        payload:request
    }
}

export function carDetail(id){
    const request=fetch(`${URL_Root}/carsIndex?id=${id}`,
    {method:'GET'})
    .then(response=>response.json())

    console.log(request)

    return{
        type:'CAR_DETAIL',
        payload:request
    }
}