/**
 * Given the years two people were born, find the date when the younger one is exactly half the age of the older.
Notes: The dates are given in the format YYYY
 */


const birthYear1 = Number(prompt("entrez la premiere annee d'anniversaire"));
const birthYear2 = Number(prompt("entrez la deuxieme annee d'anniversaire"));

if (birthYear1 < birthYear2) {
  // Personne 2 est plus jeune
  const ageDifference = birthYear2 - birthYear1;
  const halfAge = ageDifference * 2;
  const halfAgeYear = birthYear1 + halfAge;
  console.log(`Le plus jeune a exactement la moitié de l'âge du plus âgée en ${halfAgeYear}`);
} else if (birthYear2 < birthYear1) {
  // Personne 1 est plus jeune
  const ageDifference = birthYear1 - birthYear2;
  const halfAge = ageDifference * 2;
  const halfAgeYear = birthYear2 + halfAge;
  console.log(`Le plus jeune a exactement la moitié de l'âge du plus âgée en ${halfAgeYear}`);
} else {
  // Les personnes ont le même âge
  console.log(`Les personnes ont le même âge`);
}