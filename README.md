# G Sivani Bharath — Portfolio

A responsive React + TypeScript + Vite portfolio, designed for GitHub Pages. All content is maintained in `src/data.ts`. No backend or paid API is required.

## 1. Run locally
1. Install [Node.js LTS](https://nodejs.org/).
2. Extract this ZIP and open the `sivani-portfolio` folder in VS Code.
3. Open Terminal in VS Code and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints (usually `http://localhost:5173`).

## 2. Edit your information
Edit `src/data.ts` to update the introduction, project descriptions, skills, courses, awards, and contact links. Items marked as placeholders should be replaced with genuine URLs/details before publishing. Project source/demo buttons are intentionally hidden until a real URL is added.

## 3. Resume PDF
Your supplied resume is already copied to `public/assets/resume.pdf`. The “Download Resume” buttons link to it. To update it, replace that file with your newer PDF and keep the filename `resume.pdf`.

## 4. Add project screenshots and links
- Put image files in `public/assets/` (for example `hemotwin.png`).
- Update each project's `image` in `src/data.ts` to `/assets/hemotwin.png`.
- Add actual GitHub/demo URLs to the `github` and `demo` fields. Buttons appear only when a URL is supplied.
- Project cards open a detail modal with problem, solution, contribution, features and technologies.

The current project illustrations are CSS-made previews, not claims of live product screenshots.

## 5. Push to GitHub
Create an empty repository on GitHub, then from this folder run:

```bash
git init
git add .
git commit -m "Build personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own repository URL.

## 6. Deploy with GitHub Pages
1. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the build/deployment source, or use the manual build option below.
2. For a project repository named `YOUR-REPOSITORY`, build with the repository base path:
   - PowerShell: `$env:VITE_BASE="/YOUR-REPOSITORY/"; npm run build`
   - macOS/Linux: `VITE_BASE=/YOUR-REPOSITORY/ npm run build`
3. For a repository named `YOUR-USERNAME.github.io`, use the default base `/`.
4. To deploy using the included `gh-pages` command:
   - PowerShell: `$env:VITE_BASE="/YOUR-REPOSITORY/"; npm run deploy`
   - macOS/Linux: `VITE_BASE=/YOUR-REPOSITORY/ npm run deploy`
   - In **Settings → Pages**, choose the `gh-pages` branch and `/ (root)` if using this method.
5. Wait for GitHub Pages to finish publishing, then open the URL shown in Pages settings.

## 7. Test before sharing
Run `npm run build` and check that it completes. Preview the production build with `npm run preview`. Test the menu on mobile, every navigation anchor, project detail modals, resume download, and all contact/social links. Replace any placeholder social URL before sharing publicly.

## Notes
- Contact details present in the resume were used for email and LinkedIn.
- GitHub and any project repository/demo URLs are placeholders until you add your genuine URLs.
- Course entries are editable and should be checked against the certificates you want to present. No credential IDs, grades or dates are fabricated.
- This is a static frontend; the contact area uses email/social links rather than pretending to send form submissions to a backend.
