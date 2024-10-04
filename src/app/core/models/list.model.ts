export interface List {
 taskName: string;
  dueDate: string;
  selectedPerson?: { name: string; age: number } | null;
  newDeveloper?: { name: string; age: number } | null;
}