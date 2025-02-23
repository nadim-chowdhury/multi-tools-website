import { Button } from "react-day-picker";

export function WouldYouRather() {
  // const questions = [
  //   "Would you rather be able to fly or be invisible?",
  //   "Would you rather always have to sing or always have to dance?",
  //   "Would you rather eat only pizza or only burgers for a year?",
  //   "Would you rather travel to the past or the future?",
  // ];
  // const [question, setQuestion] = useState(null);

  const getQuestion = () => {
    // setQuestion(questions[Math.floor(Math.random() * questions.length)]);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Would You Rather?</h2>
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={getQuestion}
      >
        Generate Question
      </Button>
      {/* {question && <p className="mt-4 text-lg">{question}</p>} */}
    </div>
  );
}
