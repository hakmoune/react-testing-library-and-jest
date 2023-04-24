import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("Should render without crash", async () => {
    render(<App />);

    const button = screen.getByRole("button");
    expect(button.textContent).toBe("6");

    const h1 = screen.getByTestId("myTitle");
    expect(h1.textContent).toBe("6");

    const h3 = screen.getByRole("heading", {
      level: 3,
      text: "Hakmoune el mahdi"
    });
    expect(h3).toBeTruthy();
  });
});

/**
 * EXEMPLE
 * 1- Vérifier que notre composant ne crush pas
 * 2- Vérifier la présence de "☀️".
 * 3- Cliquer sur le bouton.
 * 4- Vérifier s'il y a bien "🌙".
 */
/*
test('Change theme', async () => {
    render(<Footer />)// Tester c'est notre composant ne crush pas

    const nightModeButton = screen.getByRole('button')//Recupere le button

    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')//Verifier le texte de button

    fireEvent.click(nightModeButton)// Declancher un click sur notre button

    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')//Verifier encore le texte de button
})
*/
