import { Colors } from '../constants';

export const getRandomColor = () => {
    return Colors[Math.floor(Math.random() * (Colors.length - 1))];
};
