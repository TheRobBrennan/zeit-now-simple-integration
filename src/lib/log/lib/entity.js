module.exports = ({ obj = {}, label = ''}) => {
  // What do we have?
  console.log(
    `${label} ${JSON.stringify(obj, null, 2)}`
  )
  /* EXAMPLE: Object passed to us when a UIHook is invoked (using label 'integrationObject')
    integrationObject {
      "payload": {
        "query": {},
        "action": "view",
        "clientState": {},
        "token": "gfwQ3OAxH9rcXZ8HSZl4Bpgn",
        "slug": "zeit-now-simple-integration",
        "configurationId": "icfg_bi8JgImzp2OhP56quDEUTVSj",
        "integrationId": "oac_EKNLMdlaCfnF8YlnxCwOs5mk",
        "teamId": null,
        "user": {
          "id": "ncdo4Tn7sJ5muh75UGuOaUGa",
          "username": "therobbrennan",
          "email": "rob@therobbrennan.com",
          "name": "TheRobBrennan",
          "profiles": []
        },
        "team": null,
        "project": null,
        "projectId": null,
        "installationUrl": "https://zeit.co/dashboard/integrations/icfg_bi8JgImzp2OhP56quDEUTVSj"
      },
      "zeitClient": {
        "options": {
          "token": "gfwQ3OAxH9rcXZ8HSZl4Bpgn",
          "teamId": null,
          "slug": "zeit-now-simple-integration",
          "integrationId": "oac_EKNLMdlaCfnF8YlnxCwOs5mk",
          "configurationId": "icfg_bi8JgImzp2OhP56quDEUTVSj"
        }
      }
    }
  */
}
