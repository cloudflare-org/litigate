HOW TO ADD DOCUMENTS TO THE CLIENT PORTAL
==========================================

1. NAMING YOUR DOCUMENT
   - Save your HTML document as: [REFERENCE].html
   - Example: LGF-2024-001.html
   - The reference is what the client types in the "Document Reference" field

2. PLACE THE FILE HERE
   - Drop the .html file into this folder: /public/documents/
   - Example: /public/documents/LGF-2024-001.html

3. GIVE THE CLIENT
   - The URL: https://yoursite.com/portal
   - Their document reference: LGF-2024-001
   - The access code (set in .env.local as PORTAL_PASSWORD)

4. CHANGING THE PASSWORD
   - Open .env.local in the project root
   - Change: PORTAL_PASSWORD=YourNewPassword
   - Restart the dev server

5. DOCUMENT FORMAT
   - Any valid HTML file works
   - Self-contained HTML (inline CSS) works best
   - Images should use absolute URLs or base64

NOTE: .env.local is NOT committed to git — keep your password safe.
