export default function getFilteredCharacters (characters: any[], filter: string) {
    return characters.filter((d: { gender: any; }) => {
        if (filter === "SHOW_ALL") {
            return true;
        } else return d.gender === filter.toLowerCase();
    });
}
