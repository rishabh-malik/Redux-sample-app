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