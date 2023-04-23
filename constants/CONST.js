import GameRenderer from "../screens/game/GameRenderer";
import GoalsAppRenderer from "../screens/goals/GoalsAppRenderer";

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
];
