{
  // Generic With Interface

  // interface - generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const pooRDeveloper: Developer<EmilabWatch> = {
    name: "pooRDeveloper",
    computer: {
      brand: "asus",
      model: "Amazon",
      releaseYear: 2002,
    },
    smartWatch: {
      brand: "Imilab",
      model: "Kw23",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "richDeveloper",
    computer: {
      brand: "apple",
      model: "mac",
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "apple",
      model: "watch 6",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yahama",
      engineCapacity: "100CC",
    },
  };
}
