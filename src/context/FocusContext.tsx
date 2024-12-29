import { createContext, useContext, useState, ReactNode } from 'react';

type MealContextType = {
  mealList: number[];
  meal: number | null;
  setMeal: (meal: number | null) => void;
  setMealList: (mealList: number[]) => void;
};

const MealContext = createContext<MealContextType | undefined>(undefined);

type MealProviderProps = {
  children: ReactNode;
};

export function MealProvider({ children }: MealProviderProps): JSX.Element {
  const [mealList, setMealListState] = useState<number[]>([]);
  const [meal, setMeal] = useState<number | null>(null);

  function setMealList(newMealList: number[]): void {
    setMealListState(newMealList);
    if (newMealList.length > 0) {
      setMeal(newMealList[0]);
    } else {
      setMeal(null);
    }
  }

  return (
    <MealContext.Provider
      value={{
        mealList,
        meal,
        setMeal,
        setMealList,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}

export function useMealContext(): MealContextType {
  const context = useContext(MealContext);
  if (!context) {
    throw new Error('useMealContext must be used within a MealProvider');
  }
  return context;
}
