const getAllProfiles = async (setAndGet) => {
    const allProfilesFetch = await fetch(
        'http://localhost:3000/api/v1/profiles',
        { headers: { authorization: setAndGet.authorization } },
    );
    const { success, error, message, result } =
        await allProfilesFetch.json();
    if (!success) console.log(error, message);
    else setAndGet.setProfiles(result);
};


export default getAllProfiles;