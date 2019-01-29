# **SlayTags**

Full Stack application giving you price comparisons instantly! 

# **Description**
This is a full stack application with a front end implemented with Bootstrap/SASS and a backend implemented with node, express, and MySQL. Handlebars is used for HTML templating. OAuth is used for user log-ins. 

After logging in with Google, the user can enter keywords to search for any Electronics from Best Buy and EBay. The more specific the keywords are, the fewer results but they are more accurate to what is being searched for. The application will return up to 20 items (10 for Best Buy/ 10 for EBay) and display a description, SKU#, price, and a URL to buy now for each available item. These prices can be compared with each other online or in-store to ensure the user gets the best price for their desired product. Searches are saved so the user can refer to previous queries if needed.

# **Demo**
A video demo for this app can be found here (link).

# **Installation**
To run this application locally, first clone this repository.
```bash 
git clone git@github.com:Spinglez/p2_slaytags.git
```
Next, install all application dependencies.
```bash
cd p2_slaytags
npm install
```
Then run the node server locally.
```bash
node server.js
```
Finally, open the local application on port 3000 at http://localhost:3000/


# **Collaborators**
* Christian Cabrera (https://github.com/Spinglez)
* Tam Tran (https://github.com/tamtr89)
* Matt Wong (https://github.com/mattthewong)
* Mouzima Mousumi (https://github.com/mouzima)
* Jonathan Hart (https://github.com/jhart25)
