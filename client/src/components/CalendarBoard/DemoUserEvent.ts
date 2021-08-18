// Data, events and colors matched with examples provided
export interface DemoUserScheduleProps {
  title: string;
  resource?: string;
  start: Date;
  end: Date;
}
const DemoUserData1: DemoUserScheduleProps = {
  title: 'Research',
  resource: 'green',
  start: new Date(2020, 0, 2),
  end: new Date(2020, 0, 2),
};
const DemoUserData2: DemoUserScheduleProps = {
  title: 'Practice exam',
  resource: 'red',
  start: new Date(2020, 0, 3),
  end: new Date(2020, 0, 3),
};
const DemoUserData3: DemoUserScheduleProps = {
  title: 'Essay on environment',
  resource: 'green',
  start: new Date(2020, 0, 7),
  end: new Date(2020, 0, 7),
};
const DemoUserData4: DemoUserScheduleProps = {
  title: 'Workshop',
  resource: 'orange',
  start: new Date(2020, 0, 7),
  end: new Date(2020, 0, 7),
};
const DemoUserData5: DemoUserScheduleProps = {
  title: 'Midterm exam',
  resource: 'red',
  start: new Date(2020, 0, 9),
  end: new Date(2020, 0, 9),
};
const DemoUserData6: DemoUserScheduleProps = {
  title: 'Practice exam',
  resource: 'red',
  start: new Date(2020, 0, 15),
  end: new Date(2020, 0, 15),
};
const DemoUserData7: DemoUserScheduleProps = {
  title: 'Three days task test',
  resource: 'brown',
  start: new Date(2020, 0, 20),
  end: new Date(2020, 0, 23),
};
const DemoUserData: DemoUserScheduleProps[] = [
  DemoUserData1,
  DemoUserData2,
  DemoUserData3,
  DemoUserData4,
  DemoUserData5,
  DemoUserData6,
  DemoUserData7,
];
export { DemoUserData };
