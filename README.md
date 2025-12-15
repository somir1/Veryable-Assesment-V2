## Veryable Frontend Challenge

### **Goal**

This challenge assesses your proficiency in **React** and **Next.js**, including concepts like **API calls** and handling **loading** and **error states**.

---

### **Problem Statement**

1.  **Clone the starter repository** using the provided link: [Github Repo](https://github.com/Veryable/Frontend-Assessment).
2.  Make a `GET` API call to the endpoint: `https://frontend-challenge.veryableops.com/`. This endpoint provides the data for rendering.

---

### **Set up**

1. Once cloned run `npm install` to install dependencies
2. To start project run `npm run dev`

---

### **Samirs Notes**

Just adding a summary for things I worked through and a few ideas I would improve with more time:

1. I organized the components into a `home` fodler and a `common` folders to keep everything organized.
2. I kept the UI simple using the `MUI` Accordian component to display the `Op` and the `Operators`
3. I made a `types.ts` and `helpers.ts` to keep resuseable helper functions and types away from the main to keep components clean and clutter free.
4. I also added `Loading` and `Error` states.
5. If I had more time I would implement the bonus features and then I would rework the check out/in feature. I would proablly add a secruity pin for when some one checks in and out for added secruity. But that would mean moving away from local storage and adding something more complex.
6. I would also go through the code and see what else I clean up for example make the api call its hook. and import it in.
7. Add in unit testing

---

### **Extra Notes**

If api link is down with a error code of `500` use the `opData` array which is a copy of the data that return from the api.

1. Comment out the `useEffect` on the page component.
2. Set the `loading` useState default value to `false`.
3. On the page component replace the `home` component prop from `ops={ops}` to `ops={opsData}`.
