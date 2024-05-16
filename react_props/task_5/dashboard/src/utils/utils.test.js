import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("utils", () => {
  //test for year
  test("getFullYear returns the current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  //test for footer copy
  describe("getFooterCopy", () => {
    test("getFooterCopy returns 'Holberton School' when true", () => {
      const footerCopy = getFooterCopy(true);
      expect(footerCopy).toBe('Holberton School');
    });

    test("getFooterCopy returns 'Holberton School main dashboard' when false", () => {
      const footerCopy = getFooterCopy(false);
      expect(footerCopy).toBe('Holberton School main dashboard');
    });
  });

  //test for latest notification
  test("getLatestNotification returns correct notification", () => {
    const latestNotification = getLatestNotification();
    expect(latestNotification).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});