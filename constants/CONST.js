import GameRenderer from "../screens/game/GameRenderer";
import GoalsAppRenderer from "../screens/goals/GoalsAppRenderer";
import MealsHome from "../screens/meals/MealsHome";

export const APPS = [
  {
    key: 1,
    name: "Goals Tracker",
    url: "goals-app",
    render: <GoalsAppRenderer />,
  },
  {
    key: 2,
    name: "Game",
    url: "game-app",
    render: <GameRenderer />,
  },
  {
    key: 3,
    name: "Meals-app",
    url: "meals-app",
    render: <MealsHome />,
  },
];
