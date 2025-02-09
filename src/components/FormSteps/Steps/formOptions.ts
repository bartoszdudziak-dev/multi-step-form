const createGradesArray = (quntity: number) => {
    return Array.from({ length: quntity }).map((_, i) => ({
        label: `${i + 1}`,
        value: `${i + 1}`,
    }));
};

const englishLevels = [
    { label: 'A1', value: 'a1' },
    { label: 'A2', value: 'a2' },
    { label: 'B1', value: 'b1' },
    { label: 'B2', value: 'b2' },
    { label: 'C1', value: 'c1' },
    { label: 'C2', value: 'c2' },
];

const GENDERS_OPTIONS = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
];

const AGE_OPTIONS = [
    { label: '> 18', value: 'under 18' },
    { label: '18 - 24', value: '18-24' },
    { label: '25 - 34', value: '25-34' },
    { label: '35 - 44', value: '35-44' },
    { label: '45+', value: 'over 45' },
];

const PERSONAL = [
    { label: 'Age', name: 'age', options: AGE_OPTIONS },
    { label: 'Gender', name: 'gender', options: GENDERS_OPTIONS },
];

const REGIONS = [
    { name: 'Africa', value: 'africa' },
    { name: 'America', value: 'america' },
    { name: 'Asia', value: 'asia' },
    { name: 'Europe', value: 'europe' },
    { name: 'Oceania', value: 'oceania' },
];

const SKILLS = [
    {
        label: 'HTML',
        name: 'html',
        grades: createGradesArray(5),
    },
    { label: 'CSS', name: 'css', grades: createGradesArray(5) },
    { label: 'JavaScript', name: 'javascript', grades: createGradesArray(5) },
    { label: 'React', name: 'react', grades: createGradesArray(5) },
    { label: 'English', name: 'english', grades: englishLevels },
];

const AGREEMENTS = [
    { id: 'policy', message: 'I confirm that I have reviewed and acknowledged the policy.' },
    {
        id: 'data',
        message: 'I acknowledge that my data will be stored and retained as per policy.',
    },
    {
        id: 'contact',
        message:
            'I agree to be contacted via email and phone regarding relevant updates and information.',
    },
];

export { REGIONS, PERSONAL, SKILLS, AGREEMENTS };
