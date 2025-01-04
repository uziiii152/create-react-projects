import React from 'react';
function Card({username="No name",post="No designation"}) {
    return (
        <div>
            <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img class="w-24 h-24 rounded-full mx-auto" src="https://media.licdn.com/dms/image/v2/D4D03AQGN35Fvc_dn3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732342372629?e=1741219200&v=beta&t=qmjAf3yrMzfxBijYwiLh3rebYnjwV05RWybPM8GYaEs" alt="" width="384" height="512"/>
                    <div class="pt-6 space-y-4">
                        <blockquote>
                            <p class="text-lg font-me">
                                “Tailwind CSS is the only framework that I've seen scale
                                on large teams. It’s easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                        <figcaption>
                            <div>
                                {username}
                            </div>
                            <div>
                                {post}
                            </div>
                        </figcaption>
                    </div>
            </figure>
        </div>)
}


export default Card