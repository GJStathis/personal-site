import  PostContainer from "../../components/postContainer"
import PostContentSection from "../../components/postContentSection"
import { Archivo } from '@next/font/google'

const archivoWeighted = Archivo({
    weight: '400',
    subsets: ['latin']
})

export default function PersonalWebsite() {
    return(
        <PostContainer title="My personal website">
            <PostContentSection title="Tech stack">
                <ul>
                    <li>Frontend: React</li>
                    <li>Backend: Next.js</li>
                    <li>Database: MongoDB</li>
                </ul>
            </PostContentSection>

            <PostContentSection title="Description">
                <p>
                    This project has been a long time coming. I had always messed around with web devlopment frameworks on my own time but 
                    never really produced anything. I would create a bunch of half baked projects for fun. However, I had always wanted a
                    slice of the internet that I could call my own. As such I worked on producing this website. Now a personal site can be many
                    things and can be built in many ways. Should it have blogging functionality? Should there be some forms that people can
                    comment on? What content should you host there? Do you have enough content to host there? What framework shoud I use to
                    produce it? Should I write all my own custom code or should I use some kind of site builder? Wordpress? Wix? and so on...
                    Well finally I landed on building the website with next.js so a lot of the build process, backend and frontend would be
                    managed for me. This would allow me to get experience writing my own custom code without the headache of needing to manage
                    things like babel or webpack and would tightly couple the backend and frontend so I would not need to manage things like cors.
                    I get to keep using react which I like and javascript for the backend. I also get some perks that next.js provides when it 
                    comes to serving its static and dynamic content using the getStaticProps and getServerSideProps methods. Now as to the content
                    of the site I required three things a short intro blurb about me with links to relavent social media and career files, a 
                    web manable blog and a section to show off projects that I build. The first and the last requirement are relatvily east since
                    they are really just static html and css webpages. The second piece of content however, a web manageable blog, would be where most
                    of the actual coding and tech stack work would need to be done. To host the blog posts that I would upload to the site I decided to
                    use mongodb. Why that database in particular? Well to be honest here I actually perfer relational sql databases but I just wanted
                    to try out a no-sql database like mongo here. A lightweight sql database would work just as well here since there is really only
                    one table that needs to be managed.
                </p>
                <p>
                    So as to the main real software requirement here what was I going to need. Well I needed to be able to have a webpage with 
                    various components to create, update and delete blog posts. I needed that page to only be accessable to me and I only wanted
                    the creation to be done with file uploads.
                </p>
            </PostContentSection>

            <PostContentSection title="Challenges faced">
                <p>
                    A fair amount of the challenges that I faced during building this project just boiled down to me never having used the technology before.
                    That being said there were one challenge of note that I wanted to address which was authentication. The need for authentication came 
                    from the need to manage the blog via the webapp. I wanted to be able to run create, delete and update operations on the blog while making
                    sure that I was the only one who was able to do. To start I searched up how other people manage their authentication schems and quickly learned
                    that if you can you should avoid rolling your own authentication and use a major library instead. I picked NextAuth.js since it was built
                    to work with next.js applications. Next I needed to pick a provider and originally I wanted to go with the simple credential provider. However,
                    thinking about it for a bit and looking into how I would need to handle things like brute force attacks it seemed like that would also cause issues.
                    Finally I landed on the google provider it was easy enough to hook it up and I figured that google would be a safe bet for account security.
                    The next problem came in how NextAuth handles signins with its providers. The default behavior is to, obviously, allow all people with an 
                    account with the provider to signin to the application. On top of this all acounts are treated equally unless you provide the logic on how to 
                    add some kind of role based resriciton to each account. To solve for both of these problems NextAuth provides handy callback function that allow you
                    to modify the provider authentication somewhat. To ensure that only my account could log in I used the signin callback to make sure that the google
                    account was indeed mine by just checking the condition against an env variable. To add role based access control there were two options. I could
                    make sure to persist the account to my mongodb and manully control the accounts roles there. This would have been better for scale. Or I could just
                    add the role in the jwt and session callback. I decided to do the latter. While I think that the method of persisting the accounts to a database and 
                    adding their roles is better for larger scale applicaions. For my purposes a simple addition to the session and jwt would work. Again this was just a
                    simple condition to be check that added isAdmin as a field to the jwt and session.
                </p>
            </PostContentSection>

        </PostContainer>
    )

}