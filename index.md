The St. Johns River Water Management District has an active continuous Water Quality monitoring network that is instrumented with YSI EXO2 Sondes with various probes (e.g., pH, Dissolved Oxygen) and Sea-Bird Scientific HydroCycle-PO4 phosphate sensors.  We have three field teams responsible from anywhere from 1 to 12 stations at any given time, with different sonde and probe/parameter configurations depending on project needs.

#### Status dashboards

I designed a special dashboard for field teams to assess the status of each station and the parameters deployed at each station to assist with station assessments and troubleshooting.

This is the basic layout of the dashboard:

![](/images/IRLStatus_Headerexample.png)

With this dashboard, staff can scroll to different stations (for example, this dashboard includes 6 stations laid out just like the Mosquito Lagoon block shown here) and determine whether there are any immediate issues with the station.

They can look at the Status column to determine whether there are any problems.  If all is **OK**, as shown above, then they are encouraged to look at other dashboards to see whether they can identify any other problematic issues that aren't easily assessed with this dashboard.

When a problem arises, the dashboard indicates a Status of **CHECK**, as shown below:

![](/images/JGSStatus_CHECKexample.png)

Field staff can then look at the *Hours Overdue*, *NANs or Suppressed*, and *Repeating Values* columns to determine what kind of problem may be occurring at the station.  In the example above, there are repeating values occurring in the Phosphate data stream, which can sometimes indicate that there is a fault in the sensor.

#### Building the Dashboard

The first two blocks at the top of the dashboard are simple *Free Text or HTML* Widgets, containing simple HTML code like this:

```
<!DOCTYPE html>
<html>
<head>
<style>

h1 {
  margin-top: -25px;
  margin: 0px;
  text-align: center;
  font-size: 50px;
}

h3 {
  color: red;  
  text-align: center;
  font-style: italic;
}
</style>
</head>
<body>

<h1>Indian River Lagoon Station Status Dashboard</h1>
<h3>Please note that the Status indicates whether the
sonde is reporting but does not provide any information
on the quality of the data.  Please see the station-specific
dashboards for more information.</h3>

</body>
</html>
```

The third row of widgets includes another *Free Text or HTML* widget and a *Grid (Script-Based)* widget to display a specific timestamp from a time series.

The *Grid (Script-Based)* widget relies on an SQL query in a script.  This is built with a combination of two scripts, one *Common* script that can be used by multiple widgets and another *Data Table* script that is specific to that station.

The *Common* script looks like this:

```
Function DashboardFieldVisitDateScript(ByRef Error As String, ByVal LocationIdentifier As String) As DataTable
  DataTable dt
  String error
  String sql

  sql = "SELECT d.endtime AS LASTDATE
        FROM
        w_location l
        LEFT JOIN w_dataset d
        WHERE l.locationid = d.locationid
        AND l.identifier = '" & LocationIdentifier & "'
        AND d.label = 'WQCS'"

  dt=DatabaseQuery(error, sql)
  DashboardFieldVisitDateScript = dt
End Function
```

This
