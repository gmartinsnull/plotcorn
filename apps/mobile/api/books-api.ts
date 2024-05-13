export const getBooksBySubject = async (subject) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/subject/${subject}`;

  try {
    const response = await fetch(url).then((res) => res.json());

    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getSubjects = async () => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/subject`;

  try {
    const response = await fetch(url).then((res) => res.json());

    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
