export const getBooksBySubject = async (subject) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/subject/${subject}`;

  try {
    const response = await fetch(url).then((res) => res.json());

    // console.log(response);

    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
