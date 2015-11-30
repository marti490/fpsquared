package models;

import com.avaje.ebean.Model;

import javax.persistence.*;

@Entity
public class ChecklistItem extends Model {

    @Id
    @Column( name = "checklistitemID")
    private long id;

    @Column( name = "checked")
    public boolean checked;

    @ManyToOne(cascade = CascadeType.ALL)
    Task task;

    public static Model.Finder<Long, ChecklistItem> find = new Model.Finder<Long, ChecklistItem>(ChecklistItem.class);
}
