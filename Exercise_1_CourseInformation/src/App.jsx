const Header = ({ name }) => {
  return <h1>{name}</h1>;
};
const Content = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Contents = ({ parts }) => {
  // console.log(parts);
  return (
    <div>
      <Content part={parts[0]} />
      <Content part={parts[1]} />
      <Content part={parts[2]} />
    </div>
  );
};
const Total = ({ exercises }) => {
  return <p>Number of exercises {exercises}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  // console.log(course.name);
  return (
    <div>
      <Header name={course.name} />
      <Contents parts={course.parts} />
      <Total
        exercises={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  );
};

export default App;
