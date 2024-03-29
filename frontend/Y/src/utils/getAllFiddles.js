


const getAllFiddles = async (setAndGet) => {
    const allFiddlesFetch = await fetch(
        'http://localhost:3000/api/v1/fiddles',
        { headers: { authorization: setAndGet.authorization } },
    );
    const { success, error, message, result } =
        await allFiddlesFetch.json();
    if (!success) console.log(error, message);
    else setAndGet.setFiddles(result);
};


export default getAllFiddles;