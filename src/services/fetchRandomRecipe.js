import axios from 'axios';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const getRandomRecipe = async () => {
  try {
    const { data } = await axios.get();
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default getRandomRecipe;