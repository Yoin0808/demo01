package com.haiersoft.db;

import java.sql.*;
import java.util.Map;
import java.util.Properties;

public class DBOper {
    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;

    /**
     * ????????????
     */
    public Connection getConn(String server, String dbname, String user,
                              String pwd) throws ClassNotFoundException, SQLException,
            InstantiationException, IllegalAccessException {
        String DRIVER = "com.mysql.jdbc.Driver";
        String URL = "jdbc:mysql://" + server + ":3306/" + dbname + "?user="
                + user + "&password=" + pwd+"&useUnicode=true&characterEncoding=utf8";
        // ???????
        Class.forName(DRIVER).newInstance();
        // ????????????
        conn = DriverManager.getConnection(URL);
        // ????????
        return conn;
    }

    /**
     * ??????
     */
    public void closeAll() {
        // ???rs????????rs
        if (rs != null) {
            try {
                rs.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        //???pstmt????????pstmt
        if (pstmt != null) {
            try {
                pstmt.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        //???conn????????conn
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * ???SQL?????????в??
     */
    public ResultSet executeQuery(String preparedSql, String[] param) {
        //????SQL,???SQL
        try {
            // ???PreparedStatement????
            pstmt = conn.prepareStatement(preparedSql);
            if (param != null) {
                for (int i = 0; i < param.length; i++) {
                    // ??????sql???ò???
                    pstmt.setString(i + 1, param[i]);
                }
            }
            // ???SQL???
            rs = pstmt.executeQuery();
        } catch (SQLException e) {
            // ????SQLException??
            e.printStackTrace();
        }
        return rs;
    }

    /**
     * ???SQL???????????????????????????????в??
     */
    public int executeUpdate(String preparedSql, String[] param) {

        int num = 0;

        //????SQL,???SQL
        try {
            // ???PreparedStatement????
            pstmt = conn.prepareStatement(preparedSql);
            if (param != null) {
                for (int i = 0; i < param.length; i++) {
                    // ??????sql???ò???
                    pstmt.setString(i + 1, param[i]);
                }
            }
            // ???SQL???
            num = pstmt.executeUpdate();
        } catch (SQLException e) {
            // ????SQLException??
            e.printStackTrace();
        }
        return num;
    }
    public static void main(String[] args) {
        Properties p = System.getProperties();
        for(Map.Entry<Object, Object> e:p.entrySet()){
            System.out.println(e.getKey()+"= "+e.getValue());
        }
    }
}
